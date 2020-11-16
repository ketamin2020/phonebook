import React from "react";
import { connect } from "react-redux";
import contactActions from "../redux/contactActions";
import contactSelectors from "../redux/contactSelectors";
import PropTypes from "prop-types";
import styles from "../components-phonebook/styles/filterContact.module.css";
function filterContact({ value, onChangeFilter }) {
  return (
    <div className={styles.group}>
      <div className="ui icon input">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          required
          onChange={(e) => onChangeFilter(e.target.value)}
        />
        <i aria-hidden="true" className="search circular link icon"></i>
      </div>
    </div>
  );
}
const mapDispatchToProps = {
  onChangeFilter: contactActions.changeFilter,
};

const mapToStateToProps = (state) => ({
  value: contactSelectors.getFilterValue(state),
});
export default connect(mapToStateToProps, mapDispatchToProps)(filterContact);

filterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
