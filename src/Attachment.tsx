import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HistoryActions } from './App.tsx';

export interface IAttachment {
    content: any;
    contentType: string;
    contentUrl: string;
}

export const Attachment = (props: {
    actions: HistoryActions,
    attachment: IAttachment
}) => {
    const buttonActions = {
        "imBack": props.actions.buttonImBack,
        "openUrl": props.actions.buttonOpenUrl,
        "postBack": props.actions.buttonPostBack
    }
    // REVIEW we need to make sure each button.type is one of these

    let content = props.attachment.content;

    switch (props.attachment.contentType) {
        case "image/png":
            return <img src={ props.attachment.contentUrl }/>;

        case "application/vnd.microsoft.card.hero":

            return (
                <div className="wc-card">
                    { content.images.map(image => <img src={ image.url } />) }
                    <p><b>{ content.title }</b></p>
                    <p><i>{ content.subtitle }</i></p>
                    <p>{ content.text }</p>
                    <ul>
                        { content.buttons.map(button => <li><button onClick={ () => buttonActions[button.type](button.value) }>{ button.title }</button></li>) }
                    </ul>
                </div>
            );

        case "application/vnd.microsoft.card.thumbnail":
        case "application/vnd.microsoft.card.hero":
        case "application/vnd.microsoft.card.signin":
        case "application/vnd.microsoft.card.receipt":
            //TODO
    }
}