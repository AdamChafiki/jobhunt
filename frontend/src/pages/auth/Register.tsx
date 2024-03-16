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
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link as ReactRouterLink } from "react-router-dom";

const formSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

type RegisterSchemaType = z.infer<typeof formSchema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const isLoadingForm = isSubmitting;

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Form data:", data);
  };

  return (
    <div className="min-h-[calc(100vh-72px)] grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[600px] p-6 rounded-md"
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
                {...register("firstName")}
              />
              {errors.firstName && (
                <span className="text-sm text-rose-600">
                  {errors.firstName.message}
                </span>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input
                focusBorderColor="teal.500"
                type="text"
                {...register("lastName")}
              />
              {errors.lastName && (
                <span className="text-sm text-rose-600">
                  {errors.lastName.message}
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
          <ChakraLink className="text-gray-500 font-semibold text-sm" as={ReactRouterLink} to="/login">
            If you already have an account, please log in.
          </ChakraLink>
        </VStack>
      </form>
    </div>
  );
};

export default RegisterPage;
