import axios from "axios";
import { H3Event } from "h3";

async function setRefreshTokenCookie(event: H3Event, refreshToken: string) {
  setCookie(event, "refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });
}

async function setAccessTokenCookie(event: H3Event, accessToken: string) {
  setCookie(event, "access_token", accessToken, {
    sameSite: "strict",
    path: "/",
  });
}

export default defineEventHandler(async (event) => {
  const method = getMethod(event);
  if (method === "POST") {
    const body = await readBody(event);

    // Validasi sederhana
    if (!body.email || !body.password) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Username and password are required",
        })
      );
    }
    const credentials = { email: body.email, password: body.password };
    const { data } = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      credentials
    );
    // Set cookies
    await setAccessTokenCookie(event, data.access_token);
    await setRefreshTokenCookie(event, data.refresh_token);

    return {
      success: true,
      message: "Login successful",
      data: data,
    };
  }

  // Fallback jika method tidak dikenal
  return sendError(
    event,
    createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    })
  );
});
