import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  RadioGroup,
  styled,
  useRadioGroup,
} from "@mui/material";
import { IFilter } from "../type/interface";
import { color, price } from "../data/info";

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const FilterList = ({
  setFilter,
}: {
  setFilter: (filter: IFilter) => void;
}) => {
  const onFilterColor = (colorValue: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, color: colorValue }));
  };

  const onFilterPrice = (start: number, end: number) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      price: { priceStart: start, priceEnd: end },
    }));
  };

  return (
    <div>
      <div className="flex flex-300 w-full h-12 border-b-2  border-sec border-opacity-60 justify-center items-center ">
        E-commerce
      </div>
      <div className="w-full capitalize flex flex-col px-20 py-4">
        <h3 className="text-left py-2 ">Colors</h3>
        <RadioGroup name="use-radio-group" defaultValue={'first'}>
          <MyFormControlLabel
            value="first"
            label="All"
            control={<Radio size="small" />}
            onClick={() => onFilterColor("")}
          />
          {color.map((e: string) => (
            <MyFormControlLabel
              value={e}
              label={e}
              control={<Radio size="small" />}
              onClick={() => onFilterColor(e)}
            />
          ))}
        </RadioGroup>
        <h3 className="text-left py-2 ">Price</h3>
        <RadioGroup name="use-radio-group" defaultValue={'first'}>
          <MyFormControlLabel
            value="first"
            label="All"
            control={<Radio size="small" />}
            onClick={() => onFilterPrice(0, 10000000)}
          />
          {price.map((e, index) => (
            <MyFormControlLabel
              key={index}
              value={e.value}
              label={`$${e.start} - ${e.end ? "$" + e.end : "Above"}`}
              control={<Radio size="small" />}
              onClick={() => onFilterPrice(e.start, e.end || 100000000)}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterList;
