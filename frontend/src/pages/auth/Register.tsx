import {
  FormControl,
  FormLabel,
  Input,
  Box,
  VStack,
  Heading,
  Button,
  Link as ChakraLink,
  useToast,
} from "@chakra-ui/react";

import axiosInstance from "../../utils/axios";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";

const formSchema = z.object({
  first_name: z.string().min(3),
  last_name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

type RegisterSchemaType = z.infer<typeof formSchema>;

const RegisterPage = () => {
  const [erross, setErross] = useState(null);
  const toast = useToast();

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const isLoadingForm = isSubmitting;
  console.log(erross);

  const onSubmit = async (data: RegisterSchemaType) => {
    try {
      const resp = await axiosInstance.post("auth/register", data);
      toast({
        position: "bottom-right",
        title: "Account created.",
        description: resp.data.status,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      reset();
    } catch (error: AxiosError) {
      setErross(error.response.data);
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white min-w-[600px] p-6 rounded-md mt-5"
      >
        <VStack spacing={"2rem"}>
          <Box>
            <Heading as="h1" size="xl" noOfLines={1}>
              Create your account
            </Heading>
          </Box>
          <Box
            w={"100%"}
            display={"flex"}
            gap={"2rem"}
            justifyContent={"space-between"}
          >
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                focusBorderColor="teal.500"
                type="text"
                {...register("first_name")}
              />
              {errors.first_name && (
                <span className="text-sm text-rose-600">
                  {errors.first_name.message}
                </span>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input
                focusBorderColor="teal.500"
                type="text"
                {...register("last_name")}
              />
              {errors.last_name && (
                <span className="text-sm text-rose-600">
                  {errors.last_name.message}
                </span>
              )}
            </FormControl>
          </Box>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              focusBorderColor="teal.500"
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-rose-600">
                {errors.email.message}
              </span>
            )}
            {erross && (
              <span className="text-sm text-rose-600">{erross.message}</span>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              focusBorderColor="teal.500"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-sm text-rose-600">
                {errors.password.message}
              </span>
            )}
          </FormControl>
          <Button
            isLoading={isLoadingForm}
            w={"100%"}
            loadingText="in process"
            colorScheme="teal"
            variant="outline"
            type="submit"
          >
            Register
          </Button>
          <ChakraLink
            className="text-gray-500 font-semibold text-sm"
            as={ReactRouterLink}
            to="/login"
          >
            If you already have an account, please log in.
          </ChakraLink>
        </VStack>
      </form>
    </div>
  );
};

export default RegisterPage;
