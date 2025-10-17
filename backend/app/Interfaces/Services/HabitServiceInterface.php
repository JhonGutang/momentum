<?php

namespace App\Interfaces\Services;

interface HabitServiceInterface
{
    /**
     * Create a new habit.
     *
     * @param array $data
     * @return mixed
     */
    public function createHabit(array $data);
}
