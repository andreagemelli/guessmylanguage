# coding=utf-8

from marshmallow import Schema, fields
from sqlalchemy import Column, String

from .entity import Entity, Base


class Exam(Entity, Base):
    __tablename__ = 'exams'

    word = Column(String)
    country = Column(String)

    def __init__(self, country, word, created_by):
        Entity.__init__(self, created_by)
        self.country = country
        self.word = word

class ExamSchema(Schema):
    id = fields.Number()
    word = fields.Str()
    country = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
    