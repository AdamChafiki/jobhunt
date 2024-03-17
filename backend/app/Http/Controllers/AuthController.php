<?php

namespace App\Http\Controllers;

use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException as ValidationValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $validatedData = $request->validate([
            'first_name' => 'required|min:3',
            'last_name' => 'required|min:3',
            'email' => 'required|unique:users|email|max:255',
            'password' => 'required|min:6',
        ]);

        $validatedData["password"] = Hash::make($validatedData["password"]);
        User::create($validatedData);

        return response()->json(["status" => "Account created successfully !"], 201);
    }
}
