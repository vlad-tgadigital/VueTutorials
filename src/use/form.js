import { computed, reactive } from 'vue'
import { useField } from './field'

export function useForm (init) {
  const form = reactive({})

  const validKey = 'valid'

  for (const [key, value] of Object.entries(init)) {
    console.log('I am from FORMjs file: ' + 'key: ' + key + ' value: ' + value.value)
    form[key] = useField(value)
  }

  const withoutValid = k => k !== validKey

  form[validKey] = computed(() => {
    console.log('I am from COMPUTED return Object.keys(form): ' + Object.keys(form))
    const result = Object.keys(form).filter(withoutValid).every((key) => form[key].valid)

    console.log('Accamulated result from FORMjs:' + result)

    return result
  })

  return form
}
