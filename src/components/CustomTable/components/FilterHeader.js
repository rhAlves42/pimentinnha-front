import React from "react";
import _isEmpty from "lodash/isEmpty";
import _map from "lodash/map";
import _forEach from "lodash/forEach";
import _kebabCase from "lodash/kebabCase";
import _keys from "lodash/keys";
import _filter from "lodash/filter";
import _concat from "lodash/concat";
import _toLower from "lodash/toLower";
import _clone from "lodash/clone";
import PropTypes from "prop-types";
import { Form, Formik } from "formik";

import Button from "../../Button";

import Field from "../../Field";
import { SearchOutlined } from "@ant-design/icons";
import { compactObject } from "../../../utils/collection";

const FilterHeader = ({ data, setData, filterColumns }) => {
  const [originalData, setOriginalData] = React.useState([]);
  const [hasAppliedFilter, setHasAppliedFilter] = React.useState(false);
  if (_isEmpty(filterColumns)) return null;

  const handleSubmit = (values, { setSubmitting, resetForm, ...props }) => {
    const validKeys = _keys(compactObject(values));
    if (_isEmpty(validKeys)) {
      resetForm();
      setSubmitting(false);
      return;
    }
    setOriginalData(data);
    let newFilteredData = _clone(data);
    _forEach(validKeys, (key) => {
      newFilteredData = _filter(
        newFilteredData,
        (item) => {
          if (key === 'categoria') {
            console.log('item[cor]', item['cor'])
            console.log('item[key]', item[key])
           return item[key] === values[key] || item['cor'] === values[key]
          }

          return item[key] === values[key];
        }
      );
      setData(newFilteredData);
    });

    setHasAppliedFilter(true);

    setSubmitting(false);
  };

  const initialValues = {};
  _forEach(filterColumns, (column) =>
    Object.assign(initialValues, {
      [_kebabCase(column.title)]: undefined,
    })
  );

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({
          values,
          errors,
          touched,
          onChange,
          validateForm,
          isSubmitting,
          setSubmitting,
          resetForm,
          ...props
        }) => (
          <Form noValidate className="Grid">
            {_map(filterColumns, (colum) => (
              <Field
                key={colum.title}
                values={values}
                label={colum.title}
                type="text"
                name={_kebabCase(colum.title)}
                className="mb16"
                errors={errors}
                touched={touched}
                fieldWrapperClassName="u-size12of12 u-sm-size6of12 u-md-size4of12 u-lg-size4of12"
                {...props}
              />
            ))}
            <div className="u-size12of12 flex flex-row items-center">
              <div className="w-30 mt8-ns mb24">
                <Button disabled={isSubmitting} type="submit">
                  <>
                    <SearchOutlined className="mr8" />
                    Buscar
                  </>
                </Button>
              </div>
              {hasAppliedFilter && (
                <div className="w-30 mt8-ns mb24">
                  <Button
                    onClick={() => {
                      setHasAppliedFilter(false);
                      setData(originalData);
                      resetForm();
                    }}
                    type="ghost"
                  >
                    Limpar filtros
                  </Button>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

FilterHeader.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func,
  filterColumns: PropTypes.array,
};

export default FilterHeader;
