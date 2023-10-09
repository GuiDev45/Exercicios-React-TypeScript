"use client";

import { useForm } from "react-hook-form";
// zod é simplismente uma biblioteca para validar dados.
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import axios from "axios";

const schemaForm = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, "Por favor, informe um CEP válido"),
      street: z.string().min(1, "Por favor, informe um nua válida"),
      number: z.string().min(9, "Por favor, informe um número válido"),
      city: z.string().min(9, "Por favor, informe um cidade válido"),
      state: z.string().min(9, "Por favor, informe um estado válido"),
      complement: z.string(),
      district: z.string().min(9, "Por favor, informe um bairro válido"),
    }),
  })
  .transform((field) => ({
    address: {
      zipCode: field.address.zipCode,
      city: field.address.city,
      complement: field.address.complement,
      district: field.address.district,
      number: field.address.number,
      state: field.address.state,
      street: field.address.street,
    },
  }));

// Com isso o typescript já entende que eu tenho todas as tipagens do schema
type FormProps = z.infer<typeof schemaForm>;

type AddressProps = {
  bairro: string;
  complemento: string;
  uf: string;
  logradouro: string;
  localidade: string;
};

export default function Cep() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    // Uma boa prática é passar o defaultValues
    defaultValues: {
      address: {
        city: "",
        complement: "",
        district: "",
        number: "",
        state: "",
        street: "",
        zipCode: "",
      },
    },
  });

  const zipCode = watch("address.zipCode");

  // Já entendeu que meus dados/data vão ser o que está no schema
  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  const handleSetData = useCallback(
    (data: AddressProps) => {
      setValue("address.city", data.localidade);
      setValue("address.street", data.logradouro);
      setValue("address.state", data.uf);
      setValue("address.district", data.bairro);
      setValue("address.complement", data.complemento);
    },
    [setValue],
  );

  // Fazendo a requisição da API viaCep
  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      );
      handleSetData(data);
    },
    [handleSetData],
  );

  console.log(errors);

  function zipCodeMask(zipCode: string): string {
    // Implemente a lógica para formatar o CEP aqui, por exemplo:
    // Remover caracteres não numéricos e adicionar hífen
    return zipCode;
  }

  useEffect(() => {
    setValue("address.zipCode", zipCodeMask(zipCode));

    if (zipCode.length !== 9) return;

    handleFetchAddress(zipCode);
  }, [handleFetchAddress, setValue, zipCode]);

  return (
    <>
      <h2>Cep</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("address.zipCode")}
          type="text"
          placeholder="CEP"
          maxLength={9}
        />
        {errors.address?.zipCode?.message && (
          <p>{errors.address?.zipCode?.message}</p>
        )}

        <input {...register("address.street")} type="text" placeholder="Rua" />
        {errors.address?.street?.message && (
          <p>{errors.address?.street?.message}</p>
        )}

        <input
          {...register("address.district")}
          type="text"
          placeholder="Bairro"
        />
        {errors.address?.district?.message && (
          <p>{errors.address?.district?.message}</p>
        )}

        <input
          {...register("address.complement")}
          type="text"
          placeholder="Complemento"
        />
        {errors.address?.complement?.message && (
          <p>{errors.address?.complement?.message}</p>
        )}

        <input {...register("address.city")} type="text" placeholder="Cidade" />
        {errors.address?.city?.message && (
          <p>{errors.address?.city?.message}</p>
        )}

        <input
          {...register("address.state")}
          type="text"
          placeholder="Estado"
        />
        {errors.address?.state?.message && (
          <p>{errors.address?.state?.message}</p>
        )}

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
