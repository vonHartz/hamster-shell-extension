QUnit.test('formatDurationHours', function(assert) {
    assert.strictEqual(formatDurationHours(60), '1.0h');
    assert.strictEqual(formatDurationHours(120), '2.0h');
    assert.strictEqual(formatDurationHours(80), '1.3h');
});
