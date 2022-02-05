<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\KontoController;
use App\Http\Controllers\QuestionsController;
use App\Http\Controllers\RankingController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WelcomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/quiz', function () {
    return view('home');
});

Route::get('/', [WelcomeController::class, 'index']);
Route::delete('/users/{user}', [UserController::class, 'destroy'])->middleware('auth');
Route::get('/products', [ProductController::class, 'index'])->name('products.index')->middleware('auth');
Route::get('/products/create', [ProductController::class, 'create'])->name('products.create')->middleware('auth');
Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show')->middleware('auth');
Route::post('/products', [ProductController::class, 'store'])->name('products.store')->middleware('auth');
Route::get('/products/edit/{product}', [ProductController::class, 'edit'])->name('products.edit')->middleware('auth');
Route::post('/products/{product}', [ProductController::class, 'update'])->name('products.update')->middleware('auth');
Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy')->middleware('auth');

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/users/list', [UserController::class, 'index'])->middleware('auth');
Route::get('/user', [KontoController::class, 'konto'])->middleware('auth');
Route::get('/ranking/pytania', [QuestionsController::class, 'questions'])->middleware('auth');
Route::get('/ranking', [RankingController::class, 'ranking'])->middleware('auth');
