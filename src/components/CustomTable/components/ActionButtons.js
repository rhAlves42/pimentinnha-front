import React from "react";
import _get from "lodash/get";
import PropTypes from "prop-types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ActionButtons = ({ itemInfo, onEdit, onDelete }) => {
  const itemId = _get(itemInfo, "id", "");
  return (
    <aside className="flex flex-row items-center justify-between">
      <EditOutlined onClick={async () => await onEdit(itemId)} />
      <DeleteOutlined onClick={async () => await onDelete(itemInfo)} />
    </aside>
  );
};
ActionButtons.propTypes = {
  itemInfo: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};
export default ActionButtons;
