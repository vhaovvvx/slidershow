//
function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  //   console.log(options.onSubmit);
  let formElement = document.querySelector(options.form);

  let selectorRules = {};

  function Validate(inputElement, rule) {
    let errorMessage;
    let errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);
    // lấy ra các rules của selector
    let rules = selectorRules[rule.selector];

    //lặp qua từng rule & kiểm tra
    //nếu có lỗi thì dừng việc kiểm tra
    for (let i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.classList.remove("invalid");
    }
    return !errorMessage;
  }

  if (formElement) {
    //onsubmit
    formElement.onsubmit = function (e) {
      e.preventDefault();
      let isFormValid = true;
      // lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        let inputElement = formElement.querySelector(rule.selector);
        console.log(inputElement);
        let isValid = Validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        //Trường hợp submit với javascript
        if (typeof options.onSubmit === "function") {
          let enableInputs = formElement.querySelectorAll(
            "[name]:not([disabled])"
          );
          let formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            values[input.name] = input.value;
            return values;
          },
          {});
          options.onSubmit(formValues);
        }
        //submit với hành vi mặc định
      } else {
        console.log("có lỗi");
        // formElement.submit();
      }
    };
    //Lặp qua mỗi rule và xử lý ( lắng nghe sự kiện blur , input ,...)
    options.rules.forEach(function (rule) {
      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      let inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        //xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          Validate(inputElement, rule);
        };
        //xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          let errorElement = getParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(options.errorSelector);
          errorElement.innerText = "";
          getParent(inputElement, options.formGroupSelector).classList.remove(
            "invalid"
          );
        };
      }
    });
  }
}

//Nguyên tắc của các rules:
//1. Khi có lỗi => trả message lỗi
//2. khi hợp lệ => undefined
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim ? undefined : "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      let regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(value) ? undefined : "Trường này phải là Email";
    },
  };
};

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Vui lòng nhập tối thiểu ${min} ký tự`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Giá trị nhập vào không chính xác";
    },
  };
};
