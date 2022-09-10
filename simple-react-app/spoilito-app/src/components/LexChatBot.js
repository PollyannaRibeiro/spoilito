import React from 'react';
import LexChat from 'react-lex-plus';

// get any update from conversation

class CustomChatbot extends LexChat {
    componentDidUpdate(prevProps, prevState) {
        super.componentDidUpdate(prevProps, prevState);
        if (prevState.sessionAttributes.mediaType === this.state.sessionAttributes.mediaType &&
            prevState.sessionAttributes.genre === this.state.sessionAttributes.genre &&
            prevState.sessionAttributes.trigger === this.state.sessionAttributes.trigger) {
            return
        }

        this.props.onChangeFilters(this.state.sessionAttributes.mediaType, 
                                   this.state.sessionAttributes.genre,
                                   this.state.sessionAttributes.trigger);
        console.log("States: " + this.state.sessionAttributes.genre + " " + this.state.sessionAttributes.mediaType + " " + this.state.sessionAttributes.trigger);

    }
}

class LexChatbot extends React.Component{

    constructor(props){
        super(props);
    }

    onChange(mediaType, genre, trigger){
        this.props.onChangeFilters(mediaType, genre, trigger);
    }

    render(){
        return(
            <>
            <CustomChatbot
                botName="SpoilitoBot"
                IdentityPoolId="eu-west-2:0d632752-c4b8-4e03-87ad-98d7ff163952"
                placeholder="Hi"
                backgroundColor="#FFFFFF"
                height="430px"
                region="eu-west-2"
                headerText="Chat with Spolito"
                headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
                greeting={"Hi, how can I help, today?"}
                debugMode={true}
                sessionAttributes={{ola: "Hello"}}
                onChangeFilters={this.onChange.bind(this)}
                />;
            </>
        );
    }
}

export default LexChatbot;