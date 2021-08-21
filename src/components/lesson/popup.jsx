import React, { useState } from "react"
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core'
import Controls from "./Controls"
import CloseIcon from '@material-ui/icons/Close'
import "./popup.css"
import CustomerForm from './CustomerForm'
import PaymentScreen from './PaymentScreen'
// import AdPopupWindow from './AdPopupWindow'



const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(1),
        position: 'absolute',
        top: theme.spacing(1)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {
    const [pytScreen] = useState(false)
    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                    <form>
                        <div className="title">
                            <p>
                                <img src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/01/Rajnikanth.jpg?fit=621%2C414&ssl=1" />
                            </p>
                        </div>
                    </form>
                    </Typography>
                    <Controls.ActionButton
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {pytScreen === false ?
                    <CustomerForm 
                    pytScreen = {pytScreen}
                    />
                    : <PaymentScreen />
                }
            </DialogContent>
        </Dialog>
    )
}
