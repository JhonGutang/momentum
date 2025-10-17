<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Habit extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'habit';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'type',
        'frequency',
        'custom_days',
        'goal_count',
        'start_date',
        'end_date',
        'reminder_times',
        'color',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'custom_days' => 'array',
        'reminder_times' => 'array',
        'start_date' => 'date',
        'end_date' => 'date',
        'goal_count' => 'integer',
    ];
}
