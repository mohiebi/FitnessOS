<?php

use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('guests are redirected to the login page', function () {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('authenticated users can visit the dashboard', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get(route('dashboard'));
    $response
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('fitnessos/dashboard/index'));
});

test('authenticated users can visit a client detail page', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get(route('dashboard.clients.show', ['id' => 'c1']));

    $response
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('fitnessos/dashboard/clients/show')
            ->where('id', 'c1'));
});
