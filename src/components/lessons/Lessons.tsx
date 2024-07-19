import { Grid, Button } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import style from "./Lessons.module.css";

type FormValues = {
  lessonCode: string;
  lessonName: string;
  classes: number;
  teacherName: string;
  teacherSername: string;
};
export default function Lessons() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container className={style.container_one}>
        <Grid item lg={4} spacing={2}>
          <Controller
            name="lessonCode"
            control={control}
            rules={{
              required: "This field is required",
              maxLength: {
                value: 3,
                message: "Maximum length is 3 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Dərsin kodu"
                variant="outlined"
                error={!!errors.lessonCode}
                helperText={errors.lessonCode?.message as React.ReactNode}
              />
            )}
          />
        </Grid>
        <Grid item lg={4} spacing={2}>
          <Controller
            name="lessonName"
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
                label="Dərsin adı"
                variant="outlined"
                error={!!errors.lessonName}
                helperText={errors.lessonName?.message as React.ReactNode}
              />
            )}
          />
        </Grid>
        <Grid item lg={4}>
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
        <Grid item lg={6} spacing={2}>
          <Controller
            name="teacherName"
            control={control}
            rules={{
              required: "This field is required",
              maxLength: {
                value: 20,
                message: "Maximum length is 20 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Dərsi verən müəllimin adı"
                variant="outlined"
                error={!!errors.teacherName}
                helperText={errors.teacherName?.message as React.ReactNode}
              />
            )}
          />
        </Grid>
        <Grid item lg={6}>
          <Controller
            name="teacherSername"
            control={control}
            rules={{
              required: "This field is required",
              maxLength: {
                value: 20,
                message: "Maximum length is 20 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Dərsi verən müəllimin soyadı"
                variant="outlined"
                error={!!errors.teacherSername}
                helperText={errors.teacherSername?.message as React.ReactNode}
              />
            )}
          />
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={style.btn}
        >
          Dərs əlavə et
        </Button>
      </Grid>
    </form>
  );
}
