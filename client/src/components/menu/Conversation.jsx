
import {useContext, useEffect,useState} from 'react';
import { Box ,Typography,makeStyles} from "@material-ui/core";

import {UserContext} from '../../context/UserProvider';
import { AccountContext } from "../../context/AccountProvider";
import {getConversation,setConversation} from '../../service/api';

const useStyles = makeStyles({
    component:{
        display:'flex',
        height:40,
        padding:'13px 0',
        cursor:'pointer'
    },
    displayPicture:{
            height:50,
            width:50,
            borderRadius:'50%',
            padding:'0 14px'
    },
    timestamp:{
        fontSize:12,
        marginLeft:'auto',
        marginRight:20,
        color:'#00000099'
    },
    text:{
        color:'rgba(0,0,0,0.6)',
        fontSize:14
    }
})

const Conversation = ({user}) =>{
    const url = user.imageUrl;
    const classes = useStyles();

    const {account,newMessageFlag} = useContext(AccountContext);
    const {setPerson} = useContext(UserContext);

    const [message,setMessage] =useState({});

    useEffect(() =>{
        const getConversationMeassage = async() =>{
            const data = await getConversation({ sender : account.googleId,receiver:user.googleId});
            setMessage({text: data.message,timestamp:data.updatedAt});
        }
        getConversationMeassage();
    }, [newMessageFlag])

    const setUser = async() => {
        setPerson(user);
        await setConversation({ senderId:account.googleId, receiverId:user.googleId})
    }

    return(
        <Box className={classes.component} onClick={() => setUser()}>
            <Box>
                <img src={url} alt="display-picture" className={classes.displayPicture} />
            </Box>
            <Box style={{width:'100%'}}>
                <Box style={{display:'flex'}}>
                    <Typography>{user.name}</Typography>
                    {
                        message.text &&
                        <Typography className={classes.timestamp}>
                            {new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes()}
                        </Typography>
                    }
                </Box>
                <Box>
                      <Typography className={classes.text}>{message.text}</Typography>  
                </Box>
            </Box>
        </Box>
    )
}

export default Conversation;