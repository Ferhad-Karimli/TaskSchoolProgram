import { Grid, Button } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import style from "./Students.module.css";

type FormValues = {
  classNumber: number;
  studentName: string;
  studentSername: string;
  classes: number;
};
export default function Students() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container className={style.container}>
        <Grid item lg={4} spacing={2}>
          <Controller
            name="classNumber"
            control={control}
            rules={{
              required:
                "This field is required, Please enter a valid number between 0 and 99999",
              pattern: {
                value: /^[0-9]{1,5}$/,
                message: "Please enter a valid number between 0 and 99999",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Nömrəsi"
                variant="outlined"
                error={!!errors.classNumber}
                helperText={errors?.classNumber?.message as React.ReactNode}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^[0-9]{0,5}$/.test(input)) {
                    field.onChange(input);
                  }
                }}
                value={field.value !== undefined ? field.value : ""}
              />
            )}
          />
        </Grid>
        <Grid item lg={4} spacing={2}>
          <Controller
            name="studentName"
            control={control}
            rules={{
              required: "This field is required",
              maxLength: {
                value: 30,
                message: "Maximum length is 30 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Adı"
                variant="outlined"
                error={!!errors.studentName}
                helperText={errors.studentName?.message as React.ReactNode}
              />
            )}
          />
        </Grid>
        <Grid item lg={4}>
          <Controller
            name="studentSername"
            control={control}
            rules={{
              required: "This field is required",
              maxLength: {
                value: 30,
                message: "Maximum length is 30 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Soyadı"
                variant="outlined"
                error={!!errors.studentSername}
                helperText={errors?.studentSername?.message as React.ReactNode}
              />
            )}
          />
        </Grid>

        <Grid item lg={12} spacing={2}>
          <Controller
            name="classes"
            control={control}
            rules={{
              required:
                "This field is required, Please enter a valid number between 0 and 99",
              pattern: {
                value: /^[0-9]{1,2}$/,
                message: "Please enter a valid number between 0 and 99",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Sinifi"
                variant="outlined"
                error={!!errors.classes}
                helperText={errors.classes?.message as React.ReactNode}
                onChange={(e) => {
                  const input = e.target.value;

                  if (/^\d{0,2}$/.test(input)) {
                    field.onChange(input);
                  }
                }}
                value={field.value !== undefined ? field.value : ""}
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} className={style.container_two}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={style.btn}
        >
          Yeni Şagird əlavə et
        </Button>
      </Grid>
    </form>
  );
}
