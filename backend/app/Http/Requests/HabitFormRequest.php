<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HabitFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Assuming all authenticated users can create habits.
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title'            => ['required', 'string', 'max:255'],
            'description'      => ['nullable', 'string'],
            'type'             => ['required', 'string', 'in:good,bad,neutral'], 
            'frequency'        => ['required', 'string', 'in:daily,weekly,custom'], 
            'custom_days'      => ['nullable', 'array'],
            'custom_days.*'    => ['integer', 'between:0,6'], 
            'goal_count'       => ['required', 'integer', 'min:1'],
            'start_date'       => ['required', 'date'],
            'end_date'         => ['nullable', 'date', 'after_or_equal:start_date'],
            'reminder_times'   => ['nullable', 'array'],
            'reminder_times.*' => ['string', 'regex:/^\d{2}:\d{2}$/'],
            'color'            => ['nullable', 'string', 'max:32']
        ];
    }

    /**
     * Modify and clean the data before validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        // Example: trim strings and normalize input as needed
        $this->merge([
            'title'       => $this->title ? trim($this->title) : null,
            'description' => $this->description ? trim($this->description) : null,
            'color'       => $this->color ? trim($this->color) : null,
            'custom_days'     => is_array($this->custom_days) ? $this->custom_days : [],
            'reminder_times'  => is_array($this->reminder_times) ? $this->reminder_times : [],
        ]);
    }
}
