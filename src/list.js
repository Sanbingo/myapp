import React from 'react';
import {Button, Dialog, Text} from '@rneui/themed';
import {connect} from 'react-redux';
import {addTodo, fetchData} from './datasource/actions';

class ListScreen extends React.Component {
  constructor(props) {
    console.warn('this.props', props);
    super(props);
    this.state = {
      visible: false,
    };
  }
  handleBtnClick = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  renderList = () => {
    console.warn('state list', this.props.list?.length);
    const {list = []} = this.props;
    return list.map(item => <Text>{item.API}</Text>);
  };
  render() {
    return (
      <>
        <Button onPress={this.handleBtnClick}>
          {this.props?.route?.params?.name}
        </Button>
        <Button onPress={() => this.props?.add('hello world')}>Add</Button>
        <Button onPress={() => this.props?.fetchData('hello world')}>
          Fetch
        </Button>

        {this.renderList()}
        <Dialog
          isVisible={this.state.visible}
          onBackdropPress={this.handleBtnClick}>
          <Dialog.Title title="Dialog Title" />
          <Text>Dialog body text. Add relevant information here.</Text>
        </Dialog>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
    list: state.list,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    add: val => dispatch(addTodo(val)),
    fetchData: val => dispatch(fetchData(val)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
