import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toBeUpdated: false,
            title: '',
            amount: '',
            type: ''
        };
        //binding all our functions to this class
        this.deleteExpense = this.deleteExpense.bind(this);
        this.updateExpense = this.updateExpense.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleExpenseUpdate = this.handleExpenseUpdate.bind(this);
    }
    updateExpense(e) {
        e.preventDefault();
        //brings up the update field when we click on the update link.
        this.setState({ toBeUpdated: !this.state.toBeUpdated });
    }
    handleExpenseUpdate(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        //if author or text changed, set it. if not, leave null and our PUT request
        //will ignore it.
        let title = (this.state.title) ? this.state.title : null;
        let amount = (this.state.amount) ? this.state.amount : null;
        let type = (this.state.type) ? this.state.type : null;
        let expense = { title: title, amount: amount, type: type };
        this.props.onCommentUpdate(id, expense);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            title: '',
            amount: '',
            type: ''
        })
    }
    deleteExpense(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        this.props.onExpenseDelete(id);
        console.log('oops deleted');
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
                <a style={style.updateLink} href='#' onClick={this.updateExpense}>update</a>
                <a style={style.deleteLink} href='#' onClick={this.deleteExpense}>delete</a>
                {(this.state.toBeUpdated)
                    ? (<form onSubmit={this.handleExpenseUpdate}>
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
                            type='text'
                            placeholder='Update type...'
                            style={style.commentFormText}
                            value={this.state.type}
                            onChange={this.handleTypeChange} />
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

export default Comment;