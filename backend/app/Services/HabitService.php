<?php

namespace App\Services;

use App\Interfaces\Services\HabitServiceInterface;
use App\Models\Habit;
use App\Exceptions\CreateHabitFailedException;
use Illuminate\Support\Facades\DB;

class HabitService implements HabitServiceInterface
{
    public function createHabit(array $data)
    {
        DB::beginTransaction();
        try {
            $habit = Habit::create($data);
            DB::commit();
            return $habit;
        } catch (\Exception $e) {
            DB::rollBack();
            throw new CreateHabitFailedException("Failed to create habit.", 0, $e);
        }
    }
}
