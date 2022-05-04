import React from 'react';

class SelectedRow extends React.Component {

    render() {
        const { onLockClick, onUnlockClick, isLocked } = this.props;
        const { number, id } = this.props.number;

        return (
            <li className='list-group-item'>{number}     <button className='btn btn-primary' onClick={isLocked ? onUnlockClick : onLockClick}>
                    {isLocked ? 'UNLOCK' : 'LOCK'}
                    </button>
            </li>
        )
    }
}

export default SelectedRow;