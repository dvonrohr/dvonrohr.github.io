---
title: "Error message when using a laravel factory inside a feature test"
slug: "using-laravel-factory-inside-feature-test"
date: 2019-08-18
banner_image: code-header.png
tags: [php, laravel, testing]
description: ""
---

Today I played around with feature tests in laravel, and got the following error:

```
InvalidArgumentException: Unable to locate factory with name [default] [App\Coupon]
```

<!--more-->

The factory itself looked like this:

```php
<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Coupon;
use Faker\Generator as Faker;

$factory->define(Coupon::class, function (Faker $faker) {
    return [
        'code' => $faker->md5,
        'percent_off' => $faker->numberBetween(1, 100),
        'expired_at' => null,
    ];
});
```

And the feature test like this:

```php
namespace Tests\Feature\Http\Controllers;

use App\Coupon;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\TestCase;

class CouponControllerTest extends TestCase
{
    /**
     * @test
     */
    public function it_stores_coupon_and_redirects()
    {
        $coupon = factory(Coupon::class)->create();

        $response = $this->get('/promotions/' . $coupon->code);

        $response->assertRedirect('/#buy-now');
        $response->assertSessionHas('coupon_id', $coupon->id);
    }
}

```

After a little of research the problem was solved. PHPStorm automatically added the TestCase from the namespace PHPUnit\Framework\TestCase. Though laravel uses Tests\TestCase to extend the controller. This file is located under the tests/ folder and extends PHPUnit\Framework\TestCase. It also provides helper methods and assertions you may use during testing.

So changing the above feature test to the below will solve the problem.

```php

namespace Tests\Feature\Http\Controllers;

use App\Coupon;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class CouponControllerTest extends TestCase
{
    /**
     * @test
     */
    public function it_stores_coupon_and_redirects()
    {
        $coupon = factory(Coupon::class)->create();

        $response = $this->get('/promotions/' . $coupon->code);

        $response->assertRedirect('/#buy-now');
        $response->assertSessionHas('coupon_id', $coupon->id);
    }
}
```