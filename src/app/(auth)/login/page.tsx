"use client"
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = () => {
      try {
        setLoading(true);
        setError(""); // Clear error sebelumnya

        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        if (email !== "customer@gmail.com" || password !== "atmin123") {
          throw new Error("Invalid email or password");
        }

        Cookies.set("token", "12345");
        Cookies.set(
          "user",
          JSON.stringify({ email, password, name: "king customer" })
        );

        router.push("/chat");

      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };


  return (
    <Container size={420} my={40}>
      <Title ta="center" className="mb-20" order={2}>
        Welcome back!
      </Title>

      <Text className="text-center" size="sm" color="dimmed" mb={50}>
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput 
            label="Email" 
            placeholder="you@mantine.dev" 
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
            disabled={loading}
        />
        <PasswordInput
            label="Password" 
            placeholder="Your password" 
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required 
            mt="md" 
            radius="md" 
            disabled={loading}
        />
        <Text>
            {error}
        </Text>
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" radius="md" onClick={handleLogin} loading={loading}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}

