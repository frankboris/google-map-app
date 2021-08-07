import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as formActions from "../redux/actions/form.actions";
import App from "../App";

const mapStateToProps = (state) => ({
    form: state.form,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(formActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
