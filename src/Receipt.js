import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Receipt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toBeUpdated: false,
            title: '',
            amount: ''
        };
        //binding all our functions to this class
        this.deleteReceipt = this.deleteReceipt.bind(this);
        this.updateReceipt = this.updateReceipt.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleReceiptUpdate = this.handleReceiptUpdate.bind(this);
    }
    updateReceipt(e) {
        e.preventDefault();
        //brings up the update field when we click on the update link.
        this.setState({ toBeUpdated: !this.state.toBeUpdated });
    }
    handleReceiptUpdate(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        //if author or text changed, set it. if not, leave null and our PUT request
        //will ignore it.
        let title = (this.state.title) ? this.state.title : null;
        let amount = (this.state.amount) ? this.state.amount : null;
        let receipt = { title: title, amount: amount };
        this.props.onCommentUpdate(id, receipt);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            title: '',
            amount: ''
        })
    }
    deleteReceipt(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        this.props.onReceiptDelete(id);
        console.log('deleted receipt');
    }
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handleAmountChange(e) {
        this.setState({ amount: e.target.value });
    }
    handleTypeChange(e) {
        this.setState({ type: e.target.value });
    }
    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        return (
            <div style={style.comment}>
                <h3>{this.props.title}</h3>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
                <a style={style.updateLink} href='#' onClick={this.updateReceipt}>update</a>
                <a style={style.deleteLink} href='#' onClick={this.deleteReceipt}>delete</a>
                {(this.state.toBeUpdated)
                    ? (<form onSubmit={this.handleReceiptUpdate}>
                        <input
                            type='text'
                            placeholder='Update title...'
                            style={style.commentFormAuthor}
                            value={this.state.title}
                            onChange={this.handleTitleChange} />
                        <input
                            type='text'
                            placeholder='Update amount...'
                            style={style.commentFormText}
                            value={this.state.amount}
                            onChange={this.handleAmountChange} />
                        <input
                            type='submit'
                            style={style.commentFormPost}
                            value='Update' />
                    </form>)
                    : null}
            </div>
        )
    }
}

export default Receipt;