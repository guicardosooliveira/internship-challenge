'use client'
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { fetchApi } from "@/services/api";

import { Button, Form, Input, Main, Container, ContainerInput, SpanError, SpanAnswer, ContainerTitle, H1, P } from "./page.style";

type FormFields = {
  minNumber: number;
  maxNumber: number;
}

export default function Home() {
  const { register, handleSubmit, setError, formState: {errors, isSubmitting} } = useForm<FormFields>()
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setAnswer(null)
    }, 10000)
  }, [answer])  

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const {minNumber, maxNumber} = data

    try{
      if ( maxNumber - minNumber <= 0) {
          throw new Error()
      } else {
        const result = await fetchApi(minNumber, maxNumber)
        setAnswer(result)
      }
    } catch (error) {
      setError('root',{
        message: 'O intervalo entre os números deve ser maior que 0'
      })
    }
  }

  return (
    <Main>
      <ContainerTitle>
        <H1>Calculadora MMC de Intervalo</H1>
        <P>Insira um intervalo numérico para ser calculado o MMC</P>
      </ContainerTitle>

      <Form onSubmit={handleSubmit(onSubmit)}>

      <Container>
        <ContainerInput>
          <Input 
            {...register("minNumber", {
              required:'Este campo é obrigatório.',
              min: {
                value: 1,
                message: 'O valor deve ser um inteiro positivo.'
              },
            })} 
            type="number" 
          />
          {errors.minNumber && <SpanError>{errors.minNumber.message}</SpanError>}
        </ContainerInput>

          <ContainerInput>
            <Input 
              {...register("maxNumber", {
                required:'Este campo é obrigatório.',
                min: {
                  value: 1,
                  message: 'O valor deve ser um inteiro positivo.'
                },
              })} 
              type="number" 
            />
            {errors.maxNumber && <SpanError>{errors.maxNumber.message}</SpanError>}
          </ContainerInput>
      </Container>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Calculando...': 'Calcular'}
      </Button>

      {errors.root && <SpanError>{errors.root.message}</SpanError>}
      {answer !== null && (<SpanAnswer>O MMC do intervalo fornecido é {answer}.</SpanAnswer>)}

      </Form>
    </Main>
  );
}
