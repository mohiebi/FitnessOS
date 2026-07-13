<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'fitnessos/home')->name('home');
Route::inertia('about', 'fitnessos/about')->name('about');
Route::inertia('coaching', 'fitnessos/coaching')->name('coaching');
Route::inertia('transformations', 'fitnessos/transformations')->name('transformations');
Route::inertia('resources', 'fitnessos/resources')->name('resources');
Route::inertia('contact', 'fitnessos/contact')->name('contact');
Route::inertia('apply', 'fitnessos/apply')->name('apply');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'fitnessos/dashboard/index')->name('dashboard');
    Route::inertia('dashboard/leads', 'fitnessos/dashboard/leads')->name('dashboard.leads');
    Route::inertia('dashboard/clients', 'fitnessos/dashboard/clients/index')->name('dashboard.clients.index');
    Route::get('dashboard/clients/{id}', fn (string $id) => Inertia::render('fitnessos/dashboard/clients/show', [
        'id' => $id,
    ]))->name('dashboard.clients.show');
    Route::inertia('dashboard/workouts', 'fitnessos/dashboard/workouts')->name('dashboard.workouts');
    Route::inertia('dashboard/nutrition', 'fitnessos/dashboard/nutrition')->name('dashboard.nutrition');
    Route::inertia('dashboard/checkins', 'fitnessos/dashboard/checkins')->name('dashboard.checkins');
    Route::inertia('dashboard/progress', 'fitnessos/dashboard/progress')->name('dashboard.progress');
    Route::inertia('dashboard/messages', 'fitnessos/dashboard/messages')->name('dashboard.messages');
    Route::inertia('dashboard/calendar', 'fitnessos/dashboard/calendar')->name('dashboard.calendar');
    Route::inertia('dashboard/payments', 'fitnessos/dashboard/payments')->name('dashboard.payments');
    Route::inertia('dashboard/content', 'fitnessos/dashboard/content')->name('dashboard.content');
    Route::inertia('dashboard/ai', 'fitnessos/dashboard/ai')->name('dashboard.ai');
    Route::inertia('dashboard/reports', 'fitnessos/dashboard/reports')->name('dashboard.reports');
    Route::inertia('dashboard/settings', 'fitnessos/dashboard/settings')->name('dashboard.settings');

    Route::inertia('app', 'fitnessos/client/index')->name('client');
    Route::inertia('app/workout', 'fitnessos/client/workout')->name('client.workout');
    Route::inertia('app/nutrition', 'fitnessos/client/nutrition')->name('client.nutrition');
    Route::inertia('app/progress', 'fitnessos/client/progress')->name('client.progress');
    Route::inertia('app/checkin', 'fitnessos/client/checkin')->name('client.checkin');
    Route::inertia('app/messages', 'fitnessos/client/messages')->name('client.messages');
    Route::inertia('app/resources', 'fitnessos/client/resources')->name('client.resources');
    Route::inertia('app/profile', 'fitnessos/client/profile')->name('client.profile');
});

require __DIR__.'/settings.php';
