export const TOKEN = 'tWERMBMNVMVCMoFGFYkRTRYUeKJDTn';
export const USER_INFO = 'ASDFGHJQWERTmnlkijoij';
export const USER_CLASS_ROLES = Object.freeze({
  TEACHER: 'T',
  STUDENT: 'S'
});

export const USER_ACCOUNT_STATUS = Object.freeze({
  'A': {
    color: 'success',
    text: 'Đã kích hoạt',
    isClassDisabled: false,
  },
  'I': {
    color: 'warning',
    text: 'Chưa kích hoạt',
    isClassDisabled: false,
  },
  'D': {
    color: 'error',
    text: 'Bị Lock',
    isClassDisabled: true,
  },
})

export const CLASS_STATUS = Object.freeze({
  'A': {
    color: 'success',
    text: 'Kích hoạt',
    isClassDisabled: false,
  },
  'D': {
    color: 'error',
    text: 'Đã vô hiệu',
    isClassDisabled: true,
  },
})

// Accept constraint for import grade & import student
export const ACCEPT_IMPORT_MIMETYPES = Object.freeze([
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
])

const Constants = {
  TOKEN,
  USER_INFO,
  USER_CLASS_ROLES,
  ACCEPT_IMPORT_MIMETYPES
}

export default Constants;
