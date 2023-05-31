import { ref, reactive, watch } from 'vue'

export function useField (field) {
  console.log('I am from FIELDjs filee:' + field.value)

  const valid = ref(true)
  const value = ref(field.value)
  const touched = ref(false)
  const errors = reactive({})

  // 1
  // when page opens
  // Object.keys(field.validators ?? {}).map(name => {
  //   const isValid = field.validators[name](value.value)
  //   errors[name] = !isValid
  // })

  // // when change the value
  // watch(value, newValue => {
  //   Object.keys(field.validators ?? {}).map(name => {
  //       const isValid = field.validators[name](newValue)
  //       errors[name] = !isValid
  //     })
  // })

  // 2
  // to awoid duplication
  const reassign = val => {
    valid.value = true
    Object.keys(field.validators ?? {}).map(name => {
      const isValid = field.validators[name](val)
      errors[name] = !isValid
      if(!isValid){
        valid.value = false
      }
    })
  }

  watch(value, reassign)
  reassign(field.value)

  return { value, valid, errors, touched, blur: () => touched.value = true }
}
