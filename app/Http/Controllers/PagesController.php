<?php

namespace App\Http\Controllers;

use App\Models\pages;
use Illuminate\Http\Request;


class PagesController extends Controller
{
    public function index() {
        $pages = pages::all();
       
        return view('pages.index',compact('pages'));
    }
    public function show($id) {
        $page = pages::findOrFail($id); 
        
        return view('pages.show',compact('page'));
    }

    public function create() {
        return view('pages/create');
    }

    public function store(Request $request) {
        $request->validate([
            'title'=>'required',
            'slug'=>'required',
            'content'=>'required|min:3'
        ]);
        pages::create($request->all());

        return redirect('/create');
    }
}
