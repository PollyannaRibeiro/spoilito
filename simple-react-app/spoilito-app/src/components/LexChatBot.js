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
        
        let genre = undefined;
        if (this.state.sessionAttributes.genre != 'No preference'){
            genre = this.state.sessionAttributes.genre;
        }

        console.log("🤖 States: " + genre + " " + this.state.sessionAttributes.mediaType + " " + this.state.sessionAttributes.trigger);
        this.props.onChangeFilters(this.state.sessionAttributes.mediaType, 
                                   genre,
                                   this.state.sessionAttributes.trigger);

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
            <div className='bot-div'>
            <CustomChatbot
                botName="SpoilitoBot"
                IdentityPoolId="eu-west-2:0d632752-c4b8-4e03-87ad-98d7ff163952"
                placeholder="Hi"
                backgroundColor="#FFFFFF"
                height="430px"
                region="eu-west-2"
                headerText="Chat with me"
                headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
                debugMode={true}
                sessionAttributes={{ola: "Hello"}}
                onChangeFilters={this.onChange.bind(this)}
                />
            </div>
            </>
        );
    }
}

export default LexChatbot;