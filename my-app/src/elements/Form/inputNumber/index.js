import React ,{useState} from 'react' //useState adalah hoks untuk menggunakan state dalam fungs. komponent
import propTypes from "prop-types"
import "./index.scss"

export default function Number(props) {

    //destructor props yg akan dipakai
    const {value, placeholder, name, min, max, prefix, suffix, isSuffixPlural} = props;

    //statelokal
    const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`)

    const onChange = e => {
        let value = String(e.target.value);//konvert value keString
        if (prefix) value = value.replace(prefix);//cek apakah prefix nul/empty/undefined -> value nya akan di replace
        if (suffix) value = value.replace(suffix);

        const patternNumeric = new RegExp("[0-9]*");//rule validasi dg regex
        const isNumeric = patternNumeric.test.value;//validasi value dengan regex

        if (isNumeric  && +value <= max && +value >= min) {// +value = shorthad untuk Number(value) / ambil value bukanstring
            props.onChange({
                name: name,
                value: +value
            });
        }

        setInputValue(`${prefix}${value}${suffix}`)
        
    }

  // const onChange = e => {
  //   let value = String(e.target.value);
  //   if (+value <= max && +value >= min) {
  //     props.onChange({
  //       target: {
  //         name: name,
  //         value: +value
  //       }
  //     });
  //   }
  // };
    const minus = () => {
        value > min &&
            onChange({
                target: {
                    name: name,
                    value:+value -1
                }
            })
    }
    const plus = () => {
        value < max &&
            onChange({
                target: {
                    name: name,
                    value: +value + 1
                }
            })
    }

    return (
        <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend ">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          readOnly
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
         value={String(InputValue)}

          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
    )


}

//defaukt props ex: <Number min={daefultProps} max={defaultProps}/>
Number.defaultProps = {
    min: 1,
    max: 1,
    prefix: "",
  suffix:""
};

//deklarasi props
Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}
