import React from 'react'
import { RadioGroup, RadioButton} from 'react-radio-buttons'
import Typography  from '@material-ui/core'

export default class AdPopupWindow extends React.Component{
     render() {
        return (
            <div>
                <form>
                        <div className = "row">
                            <div className = "column">
                                <img src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/01/Rajnikanth.jpg?fit=621%2C414&ssl=1" />
                            </div>
                            <div className = "column">
                                <img src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/01/Rajnikanth.jpg?fit=621%2C414&ssl=1" />
                            </div>
                            <div className = "column">
                                <img src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/01/Rajnikanth.jpg?fit=621%2C414&ssl=1" />
                            </div>
                        </div>
                        <RadioGroup>
                            <RadioButton value="apple">
                                Apple
                            </RadioButton>
                            <RadioButton value="orange">
                                Orange
                            </RadioButton>
                        </RadioGroup>
                        <div>
                        <Typography>
                            there you are
                        </Typography>
                        </div>
                        <button onPress={() => {}} style={{ alignSelf: 'stretch' }}>
                        Activate Lasers
                        </button>
                    </form>
            </div>
        )
     }  
}
