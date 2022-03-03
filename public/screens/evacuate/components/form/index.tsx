import React, { FC } from 'react'
import { Button, Form, Selector, Stepper, Switch, TextArea, Radio, Space } from 'antd-mobile'
import { useTranslation } from 'react-i18next'

import { IEvacuationRequestForm } from '../../../../common/interfaces'
import { BaggageOption } from '../../../../common/enums'
import styles from './styles.module.less'


export interface IFormProps {
  onSubmit: (data: IEvacuationRequestForm) => void
  onCancel: () => void
}

export const FormComponent: FC<IFormProps> = ({
  onSubmit,
  onCancel,
}) => {
  const { t } = useTranslation()

  return (
    <div className={ styles.wrapper }>
      <Form
        onFinish={ onSubmit }
        footer={
          <Space
            block
            direction="vertical"
          >
            <Button
              block
              type="submit"
              color="primary"
              size="large"
            >
              { t('requestAdd') }
            </Button>
            <Button
              block
              onClick={ onCancel }
              color="danger"
              size="large"
            >
              { t('cancel') }
            </Button>
          </Space>
        }
      >
        <Form.Header>{ t('requestAdd') }</Form.Header>
        <Form.Item
          name="languages"
          label={ t('myLanguages') }
          initialValue={ ['PL'] }
        >
          <Selector
            multiple={ true }
            options={[
              {
                label: <>Polski</>,
                value: 'PL',
              },
              {
                label: <>Українськa</>,
                value: 'UA',
              },
              {
                label: <>English</>,
                value: 'EN',
              },
              {
                label: <>Русский</>,
                value: 'RU',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="peopleCount"
          label={ t('peopleCountRefugee') }
          initialValue={ 1 }
        >
          <Stepper min={ 0 } />
        </Form.Item>
        <Form.Item
          name="withPets"
          label={ t('withPetsRefugee') }
          initialValue={ false }
        >
          <Switch />
        </Form.Item>
        <Form.Item
          name="withBaggage"
          label={ t('withBaggageRefugee') }
          initialValue={ BaggageOption.SMALL_CAR }
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value={ BaggageOption.SMALL_CAR }>{ t('withBaggageRefugeeOption1') }</Radio>
              <Radio value={ BaggageOption.BIG_CAR }>{ t('withBaggageRefugeeOption2') }</Radio>
              <Radio value={ BaggageOption.TRUCK }>{ t('withBaggageRefugeeOption3') }</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="contactData"
          label={ t('contactData') }
          initialValue=""
        >
          <TextArea
            placeholder={ t('contactDataPlaceholder') }
            rows={ 4 }
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export { FormComponent as Form }
