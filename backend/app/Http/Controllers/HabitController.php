<?php

namespace App\Http\Controllers;

use App\Http\Requests\HabitFormRequest;
use App\Services\HabitService;
use App\Exceptions\CreateHabitFailedException;

class HabitController extends Controller
{
    protected $habitService;

    public function __construct(HabitService $habitService)
    {
        $this->habitService = $habitService;
    }

    public function create(HabitFormRequest $request)
    {
        try {
            $habit = $this->habitService->createHabit($request->validated());

            return response()->json([
                'message' => 'Habit created successfully.',
                'habit' => $habit,
            ], 201);
        } catch (CreateHabitFailedException $e) {
            return response()->json([
                'message' => 'Failed to create habit.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
