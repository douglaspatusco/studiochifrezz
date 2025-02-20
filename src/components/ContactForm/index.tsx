import { useContactFormValidation } from '../../hooks/useContactFormValidation'
import { useTranslation } from 'next-i18next'

import * as S from '../../styles/contact.styles'

export const ContactForm = () => {
  const { register, handleSubmit, errors, isSubmitting, status } =
    useContactFormValidation()
  const { t } = useTranslation()

  return (
    <S.Form onSubmit={handleSubmit}>
      <label htmlFor="name">{t('form-name')}</label>
      <S.Input
        id="name"
        type="text"
        placeholder={t('form-name')}
        {...register('name')}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">Email</label>
      <S.Input
        id="email"
        type="text"
        placeholder={t('form-email')}
        {...register('email')}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="subject">Assunto</label>
      <S.Input
        id="subject"
        type="text"
        placeholder={t('form-subject')}
        {...register('subject')}
      />
      {errors.subject && <p>{errors.subject.message}</p>}

      <label htmlFor="message">Mensagem</label>
      <S.TextArea
        id="message"
        placeholder={t('form-message')}
        {...register('message')}
      />
      {errors.message && <p>{errors.message.message}</p>}

      <S.Button type="submit" disabled={isSubmitting}>
        {t('form-send').toUpperCase()}
      </S.Button>

      {status === 'loading' && <p>{t('form-sending')}</p>}
      {status === 'success' && (
        <p>
          {t('form-send-success-1')}
          <br />
          {t('form-send-success-2')}
        </p>
      )}
      {status === 'error' && <p>{t('form-send-error')}</p>}
    </S.Form>
  )
}
