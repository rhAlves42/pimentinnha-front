import React from "react";
import PropTypes from "prop-types";
import _filter from "lodash/filter";
import _get from "lodash/get";
import { Table, Modal } from "antd";

import FilterHeader from "./components/FilterHeader";
import { MODAL_DELETE_INITIAL_VALUES } from "./constants";
const CustomTable = ({
  columns,
  dataSource,
  isLoading,
  onRowClick,
  modalConfig,
  setModalConfig,
  onConfirmDelete,
}) => {
  const [currentData, setCurrentData] = React.useState();
  const modalTitle = _get(modalConfig, "name", "");
  const modalIsVisible = _get(modalConfig, "visible", "");

  const filterColumns = _filter(columns, (column) => column.searchable);

  React.useEffect(() => setCurrentData(dataSource), [dataSource]);


  return (
    <>
      <FilterHeader
        data={currentData}
        setData={setCurrentData}
        filterColumns={filterColumns}
      />
      <Table
        columns={columns}
        dataSource={currentData}
        onRow={(record) => (onRowClick && { onDoubleClick: () => onRowClick(record) })}
      />

      <Modal
        title="Confirmar exclusão"
        visible={modalIsVisible}
        onOk={onConfirmDelete}
        cancelText="Cancelar"
        confirmLoading={isLoading}
        onCancel={() => setModalConfig(MODAL_DELETE_INITIAL_VALUES)}
      >
        <p className="fw3 f16">{`Deseja realmente excluir o item ${modalTitle}`}</p>
      </Modal>
    </>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  isLoading: PropTypes.bool,
  onRowClick: PropTypes.func,
  modalConfig: PropTypes.object,
  setModalConfig: PropTypes.func,
  onConfirmDelete: PropTypes.func,
};
export default CustomTable;
