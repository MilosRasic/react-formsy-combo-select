// Removes component props that shouldn't be set on the form control.
// These props come from formsy-react
// https://github.com/christianalfoni/formsy-react/blob/6b167cbfe15a72430ff475a92a70273e67a663f5/src/main.js#L441
export function cleanProps(props) {
    const {
              mapping,
              validationErrors,
              onSubmit,
              onValid,
              onValidSubmit,
              onInvalid,
              onInvalidSubmit,
              onChange,
              reset,
              preventExternalInvalidation,
              onSuccess,
              onError,

              // These come from formsy-react, too?
              validationError,
              validations,

              // These props are used by this library.
              addonAfter,
              addonBefore,
              buttonAfter,
              buttonBefore,
              elementWrapperClassName,
              help,
              label,
              options,
              labelClassName,
              layout,
              rowClassName,
              rowLabel,
              validatePristine,

              getErrorMessages,
              hasValue,
              isFormDisabled,
              isValid,
              isPristine,
              isFormSubmitted,
              isRequired,
              isValidValue,
              resetValue,
              setValidations,
              innerRef,
              

              ...rest
          } = props;

    return rest;
};
