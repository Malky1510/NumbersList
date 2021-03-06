import react from "react";

class NumberRow extends React.Component{
    render(){
        const { numberString } = this.props.number
        const { isSelected, isLocked, onSelectClick, onUnselectClick } = this.props
       return(
           <tr>
               <td>{numberString}</td>
               <td>
                   <button> {`btn btn-${isSelected ? 'danger' : 'primary'}`} disabled={isLocked} onClick={isSelected ? onUnselectClick : onSelectClick}
                        {isSelected ? 'Remove From Selected' : 'Add To Selected'}
                        </button>
               </td>
           </tr>
       )

    }
}


export default NumberRow