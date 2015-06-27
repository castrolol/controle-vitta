import React from 'react';
import numeral from 'numeral';
 
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mil',
            million: 'milhões',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return 'º';
        },
        currency: {
            symbol: 'R$'
        }
    };

    numeral.language('pt-br', language);
    numeral.language('pt-br');
}()); 

class Number extends React.Component {
    
  static propTypes = {
      value: React.PropTypes.number,
      format: React.PropTypes.string
  }
  
  static formats = {
      'currency': '$ 0,0.00'
  }
  
  constructor(){
      super();
     
  }
    
  render() {

    var num = numeral(this.props.value);
    if(this.props.zeroValue){
        num.zeroValue(this.props.zeroValue);
    }
    
    var format = this.props.format;
    if(format in Number.formats){
        format = Number.formats[format];
    }

    return <span>{num.format(format)}</span>;

  } 
}
 

export default Number;