import {
  FormControl,
  FormLabel,
  Input,
  Box,
  VStack,
  Heading,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";

interface DataType {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [erros, setErros] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting},
  } = useForm<DataType>();

  const isLoadingForm = isSubmitting;

  const onSubmit = async (data: DataType) => {
    console.log("data", data);
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
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              focusBorderColor="teal.500"
              type="text"
              {...register("email")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              focusBorderColor="teal.500"
              type="password"
              {...register("password")}
            />
          </FormControl>
          <Button
            isLoading={isLoadingForm}
            w={"100%"}
            loadingText="in process"
            colorScheme="teal"
            variant="outline"
            type="submit"
          >
            Login
          </Button>
          <ChakraLink
            className="text-gray-500 font-semibold text-sm"
            as={ReactRouterLink}
            to="/register"
          >
            If you not have an account, please register.
          </ChakraLink>
        </VStack>
      </form>
    </div>
  );
};

export default LoginPage;
