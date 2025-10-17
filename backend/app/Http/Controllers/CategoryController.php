<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCategoryFormRequest;
use Illuminate\Http\JsonResponse;
use App\Interfaces\Services\CategoryServiceInterface;
use Exception;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
    protected CategoryServiceInterface $categoryService;

    public function __construct(CategoryServiceInterface $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function create(CreateCategoryFormRequest $request): JsonResponse
    {
        try {
            $validated = $request->validated();
            $category = $this->categoryService->createCategory($validated);

            return response()->json([
                'message' => 'Category created successfully.',
                'category' => $category
            ], 201);
        } catch (Exception $e) {
            Log::error('Failed to create category: ' . $e->getMessage(), [
                'request' => $request->all(),
                'exception' => $e
            ]);
            return response()->json([
                'message' => 'Failed to create category.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
