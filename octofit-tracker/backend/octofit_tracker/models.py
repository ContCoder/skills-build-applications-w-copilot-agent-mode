from djongo import models

class User(models.Model):
    _id = models.ObjectIdField(primary_key=True)  # Use ObjectIdField for MongoDB compatibility
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=100, unique=True)  # Add username field
    password = models.CharField(max_length=100)  # Add password field
    # Add other fields as needed

class Member(models.Model):
    _id = models.ObjectIdField(primary_key=True)  # MongoDB-compatible ID
    name = models.CharField(max_length=255)

class Team(models.Model):
    _id = models.ObjectIdField(primary_key=True)  # MongoDB-compatible ID
    name = models.CharField(max_length=255)
    members = models.ArrayField(model_container=Member)  # Use embedded model for members

class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=255)
    duration = models.IntegerField()

class Leaderboard(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    score = models.IntegerField()

class Workout(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()