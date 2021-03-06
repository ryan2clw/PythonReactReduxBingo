# Generated by Django 2.2.4 on 2019-08-15 01:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('play', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='row',
            old_name='b',
            new_name='b_val',
        ),
        migrations.RenameField(
            model_name='row',
            old_name='g',
            new_name='g_val',
        ),
        migrations.RenameField(
            model_name='row',
            old_name='i',
            new_name='i_val',
        ),
        migrations.RenameField(
            model_name='row',
            old_name='n',
            new_name='n_val',
        ),
        migrations.RenameField(
            model_name='row',
            old_name='o',
            new_name='o_val',
        ),
        migrations.AlterField(
            model_name='row',
            name='card',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rows', to='play.Card'),
        ),
    ]
