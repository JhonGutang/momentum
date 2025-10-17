<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('habit', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->enum('type', ['good', 'bad', 'neutral']);
            $table->enum('frequency', ['daily', 'weekly', 'custom']);
            $table->json('custom_days')->nullable(); 
            $table->integer('goal_count')->default(1);
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->json('reminder_times')->nullable();
            $table->string('color', 7)->nullable();
            $table->timestamps();

            // Optionally add foreign key constraint if users table exists
            // $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('habit');
    }
};
