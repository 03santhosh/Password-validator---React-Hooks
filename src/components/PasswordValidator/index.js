import {useState} from 'react'

import {
  MainContainer,
  PasswordBoxContainer,
  Heading,
  Paragraph,
  InputText,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputText, setInputText] = useState('')
  const onChangeInputText = event => setInputText(event.target.value)
  return (
    <MainContainer>
      <PasswordBoxContainer>
        <Heading>Password Validator</Heading>
        <Paragraph color="#ffffff" size="17px">
          Check how strong and secure is your password
        </Paragraph>
        <InputText
          type="password"
          value={inputText}
          onChange={onChangeInputText}
        />
        {inputText.length < 8 ? (
          <Paragraph color="#ef4444" size="12px">
            Your password must be at least 8 characters
          </Paragraph>
        ) : null}
      </PasswordBoxContainer>
    </MainContainer>
  )
}

export default PasswordValidator
